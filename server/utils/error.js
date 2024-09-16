
export const handleError = async (error, req, res, next) => {
    try {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal server error";
        res.status(statusCode).json({ message });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};
