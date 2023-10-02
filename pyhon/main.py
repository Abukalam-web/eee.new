import time
import pyautogui
type_list = ["Wow .....ki somossa kon somossa tor nanir heder somossa pagol sagol" ]
for xxx in type_list:
    nxn = xxx


while True:
    time.sleep(5)
    pyautogui.typewrite(xxx)
    pyautogui.press("enter")

