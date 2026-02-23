# Use an OpenJDK base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy Maven wrapper and pom.xml first for caching dependencies
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Download dependencies (cached if pom.xml hasn't changed)
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

# Copy the rest of the backend source code
COPY src ./src

# Build the Spring Boot application JAR
RUN ./mvnw clean package -DskipTests

# Expose port 8080 for the Spring Boot app
EXPOSE 8080

# Run the JAR file
CMD ["java", "-jar", "target/binoBackend-0.0.1-SNAPSHOT.jar"]