import zipfile
import xml.etree.ElementTree as ET
import os
import sys

# Set stdout to use utf-8
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

def get_docx_text(path):
    """
    Take the path of a docx file as argument, return the text in html format.
    """
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    tree = ET.fromstring(xml_content)

    paragraphs = []
    for paragraph in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        texts = [node.text
                 for node in paragraph.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t')
                 if node.text]
        if texts:
            paragraphs.append(''.join(texts))

    return '\n'.join(paragraphs)

if __name__ == "__main__":
    file_path = "Bài của Nguyễn Mai Anh.docx"
    if os.path.exists(file_path):
        print(get_docx_text(file_path))
    else:
        print(f"File {file_path} not found.")
