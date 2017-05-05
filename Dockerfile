FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
RUN pip install --upgrade pip
COPY . .
RUN cd mysql-connector-python-master && python setup.py install && cd ..
RUN pip install -r requirements.txt
ENTRYPOINT ["python"]
CMD ["Server.py"]