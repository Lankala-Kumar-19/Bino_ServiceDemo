# Use a full JDK to build
FROM eclipse-temurin:17-jdk-focal AS builder

WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Download dependencies
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the Spring Boot JAR
RUN ./mvnw clean package -DskipTests

# -------------------------------------
# Stage 2: smaller image for running
FROM eclipse-temurin:17-jdk-focal

WORKDIR /app

# Copy the built JAR from the builder stage
COPY --from=builder /app/target/binoBackend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]