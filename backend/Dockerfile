FROM golang:1.26-alpine

WORKDIR /app/backend

# Installa air per il live-reload (fondamentale per lo sviluppo)
RUN go install github.com/air-verse/air@latest

COPY go.mod go.sum ./
RUN go mod download

COPY . .

CMD ["air", "-c", ".air.toml"]
