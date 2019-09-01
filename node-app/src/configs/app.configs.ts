const mongoose = {
    connection: 'mongodb+srv://jacob:RRgqCzxv5stwDPvZ@node-app-yfxfw.gcp.mongodb.net/srs_db?retryWrites=true',
    // connection: 'mongodb://localhost:27017/srs_db',
};

const cloudinary = {
    cloud_name: 'dfupaaz9h',
    api_key: '597377239584466',
    api_secret: '6JeSp8D94uXUfMx9a-vH-KyiQ6I',
};

export default { cloudinary, mongoose };
