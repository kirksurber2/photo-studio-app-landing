const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companyPackagesSchema = ({
    company_id: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    packageName: String,
    sessionType: String,
    packageCost: Number,
    packagePrice: Number,
    products: [{
        productType: String,
        quantity: Number,

    }],

})

module.exports = mongoose.model("Packages", companyPackagesSchema)