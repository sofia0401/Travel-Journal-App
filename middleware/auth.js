import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        // verification of token
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;
        if (token?.length > 0) {
            decodedData = jwt.verify(token, 'test');

            // getting current user's id
            req.userId = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;