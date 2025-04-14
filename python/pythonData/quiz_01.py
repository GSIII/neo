from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.family'] = 'NanumBarunGothic'

html = open('../../html/source/5/ex5-10.html', 'r', encoding='utf-8')
soup = BeautifulSoup(html, 'html.parser')
td = soup.find_all('td')
print(td)

totaltd = []
for i in td:
    totaltd.append(i.text)

print(totaltd)
mycolumns = ['이름', '국어', '영어']

myframe = pd.DataFrame(np.reshape(totaltd,(4,3)), columns=mycolumns)

myframe.set_index('이름', inplace=True)

filename = 'quiz_01_scoreGraph.png'
myframe.astype(float).plot(kind='line', title='Score', legend=True)
plt.savefig(filename, dpi=400, bbox_inches='tight')
print(filename + ' saved')
plt.show()