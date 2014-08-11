#!/bin/bash

echo "hello tosla"
echo "start tosla ......"

#mvn clean jetty:run  -Djetty.port=8081 &
mvn clean jetty:run  -Djetty.port=8081
echo "local http://localhost:8081/tosla/ "
echo "remote http://211.155.86.32:8081/tosla/"
