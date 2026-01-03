# Astra Admin Panel - Operation Manual

This guide outlines the steps to set up and run the Astra Admin Panel, which consists of a Next.js frontend and a Django backend.

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: (v18 or higher recommended)
- **Python**: (v3.10 or higher recommended)
- **Redis**: (Required for backend caching/tasks)

## Project Structure

- **Root**: Contains the Next.js frontend application.
- **astraweb/**: Contains the Django backend application.

## 1. Backend Setup (Django)

The backend handles authentication and core API logic.

1.  **Navigate to the backend directory:**
    ```bash
    cd astraweb
    ```

2.  **Create and activate a virtual environment (optional but recommended):**
    ```bash
    python -m venv venv
    # Windows
    .\venv\Scripts\activate
    # macOS/Linux
    source venv/bin/activate
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

5.  **Run the development server:**
    ```bash
    python manage.py runserver
    ```
    The backend API will be available at `http://localhost:8000`.

## 2. Frontend Setup (Next.js)

The frontend provides the user interface for the admin panel.

1.  **Navigate to the project root (if not already there):**
    ```bash
    # If you are in the astraweb directory
    cd ..
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

3.  **Generate Prisma Client:**
    ```bash
    npx prisma generate
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The frontend admin panel will be available at `http://localhost:3000/admin/login`.

## 3. Environment Variables

Ensure you have created a `.env` file in both the root directory and the `astraweb/` directory with the necessary keys (e.g., database URLs, secret keys, API keys). Refer to the source code or team documentation for the required variable names.
