import json

while True:
    with open('qa.json') as json_file:
        global data
        data = json.load(json_file)

    def modify(q, a, a1, a2, a3):
        return {'q':q, 'a':a, 'a1':a1, 'a2':a2, 'a3':a3}

    data.append(modify(
        input('What is the question you want to ask?'), 
        input('What is the correct answer?'),
        input('What is an incorrect answer?'),
        input('What is another incorrect answer?'),
        input('What is one final incorrect answer?'),
    ))

    with open('qa.json', 'w') as outfile:
        json.dump(data, outfile, indent=4)

    if input('Would you like to continue? Y/N').lower() == 'n': break
