import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    // Check for the presence of the Authorization header    
    if (!req.headers.authorization) {
        return res.status(401).send({ message: 'Unauthorized: Token not provided' });
    }

    const token = req.headers.authorization.slice(7, req.headers.authorization.length);

    // Verify the JWT token
    jwt.verify(token, 'T1VoDich', (err, decoded) => {
        console.log(token);
        if (err) {
            return res.status(401).send({ message: 'Unauthorized: Invalid token' });
        }

        // Attach the decoded payload to the request for later use
        req.decoded = decoded;
        next();
    });
};

// Function to hash password before storing them in the database
export const hashPassword = async (plainPassword) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};