#!/bin/bash

docker volume rm capstone_frontend

docker pull jayaanim/capstone_frontend:latest

docker run --rm -v frontend_build:/app/build jayaanim/capstone_frontend:latest
