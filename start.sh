#!/bin/bash

# Trap SIGINT (Ctrl+C) and SIGTERM to kill all background processes when the script exits
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

echo "======================================"
echo "Starting Development Environment..."
echo "======================================"

# 1. Start Backend
echo "[1/2] Starting Django Backend..."
cd backend || exit

# Activate virtual environment
if [ -d "venv" ]; then
    source venv/bin/activate
    echo "Using backend/venv"
elif [ -d "../.venv" ]; then
    source ../.venv/bin/activate
    echo "Using .venv in root"
else
    echo "Warning: No virtual environment found in backend/venv or .venv"
fi

# Run Django server in the background
python manage.py runserver &
BACKEND_PID=$!
echo "Backend running on PID $BACKEND_PID"

# Go back to the root directory
cd .. || exit


# 2. Start Frontend
echo "[2/2] Starting Vite Frontend..."
cd frontend || exit
# Run npm run dev in the background
npm run dev &
FRONTEND_PID=$!
echo "Frontend running on PID $FRONTEND_PID"
cd .. || exit
echo "======================================"
echo "All services started successfully!"
echo "Press Ctrl+C to stop everything."
echo "======================================"

# Wait for background jobs to finish (which keeps the script running until interrupted)
wait
