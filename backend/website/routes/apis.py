from flask import Blueprint, redirect, url_for, request, jsonify, json
import g4f, re

apis = Blueprint("apis", __name__)

def run_gpt(prompt):
    response = g4f.ChatCompletion.create(
        model="gpt-3.5-turbo",
        provider=g4f.Provider.Bing,
        messages=[{"role": "user", "content": prompt}],
    )
    return response


@apis.post('/generate-question')
def generation_question():
    data = request.get_json()
    language = data["language"]
    topic = data["topic"]

    prompt = f"""
    create a {language} question that involves {topic}. The question should provide a partially completed code base for the user to finish. please put the question in this format: 
    question_title: a one line short title
    question_prompt: contains only text
    question_code: contains only code part, no plain text
    answer_code: contains code part of the answer to the question, no plain text
    answer_explanation: explain why the answer is correct by going through the code line by line
    """

    response = run_gpt(prompt)

    pattern = r'question_title:(.*)question_prompt:(.*)question_code:(.*)answer_code:(.*)answer_explanation:(.*)'
    match = re.search(pattern, response, re.DOTALL)

    if match is None:
        return jsonify({"error": "Please try again"}), 400
    
    # Extract the data from the matched groups
    question_title = match.group(1).strip()
    question_prompt = match.group(2).strip()
    question_code = match.group(3).strip()
    answer_code = match.group(4).strip()
    answer_explanation = match.group(5).strip()

    parsed_response = {
        "question_title": question_title,
        "question_prompt": question_prompt,
        "question_code": question_code,
        "answer_code": answer_code,
        "answer_explanation": answer_explanation
    }

    return jsonify(parsed_response), 200



@apis.post('/evaluate-answer')
def evaluate_answer():
    data = request.get_json()
    question = data["question"]
    correct_answer = data["correct_answer"]
    user_answer = data["user_answer"]

    prompt = f"""
    Here is the question: {question}
    here is the correct answer: {correct_answer}
    here is my answer: {user_answer}
    Please compare my answer to the correct answer. Tell me if my code is correct and provide feedback.
    Please put the response in this format:
    outcome: is my answer correct or incorrect. use just one of the words here
    feedback
    """

    response = run_gpt(prompt)

    pattern = r'outcome:(.*)feedback:(.*)'
    match = re.search(pattern, response, re.DOTALL)

    if match is None:
        return jsonify({"error": "Please try again"}), 400
    
    # Extract the data from the matched groups
    outcome = match.group(1).strip()
    feedback = match.group(2).strip()

    parsed_response = {
        "outcome": outcome,
        "feedback": feedback
    }

    return jsonify(parsed_response), 200

