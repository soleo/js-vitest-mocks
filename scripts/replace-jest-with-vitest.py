#!/opt/homebrew/bin/python3
import os
import re
import subprocess


def get_git_root():
    try:
        root = subprocess.check_output(['git', 'rev-parse', '--show-toplevel'])
        return root.decode('utf-8').strip()
    except subprocess.CalledProcessError:
        print("Error: Are you sure you're in a Git repository?")
        return None


def replace_jest_with_vitest(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    content = re.sub(r'jest.mock\(', 'vi.mock(', content)
    content = re.sub(r'jest.fn\(', 'vi.fn(', content)
    content = re.sub(r'jest', 'vi', content)
    # Add more replacements as needed

    with open(file_path, 'w') as file:
        file.write(content)


def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.ts'):
                replace_jest_with_vitest(os.path.join(root, file))


git_root = get_git_root()
if git_root:
    process_directory(git_root)
