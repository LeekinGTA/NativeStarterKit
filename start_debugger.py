#!/usr/bin/env python
import webbrowser
from threading import Timer
import os


def open_browser():
    webbrowser.open_new_tab('http://localhost:8081/debugger-ui')

Timer(5, open_browser, ()).start()
os.system("node_modules/react-native/packager/packager.sh")
