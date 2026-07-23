exports.dashboard = async (req, res) => {

    res.status(200).json({

        message: "Admin Dashboard Ready."

    });

};


exports.statistics = async (req, res) => {

    res.status(200).json({

        message: "Website Statistics Ready."

    });

};


exports.websiteSettings = async (req, res) => {

    res.status(200).json({

        message: "Website Settings Ready."

    });

};