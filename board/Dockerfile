FROM openjdk:17-oracle

ARG JAR_FILE=build/libs/board-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

EXPOSE 8080

CMD [ "java", "-jar", "/app.jar" ]