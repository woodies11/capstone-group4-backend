/**
 * Created by Donya on 4/8/2017 AD.
 *
 * A file to specify variable types :)
 */
export var Product = (function () {
    function Product(iid, name, description, price, category, location, since, seller, _img_urls, delivery_options) {
        if (category === void 0) { category = {
            cid: '',
            name: ''
        }; }
        if (location === void 0) { location = {
            province: '',
            city: '',
        }; }
        if (seller === void 0) { seller = {
            name: '',
            sid: '',
            rating: -1,
            rating_count: 0,
            contact: '',
        }; }
        if (_img_urls === void 0) { _img_urls = []; }
        if (delivery_options === void 0) { delivery_options = []; }
        this.iid = iid;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.location = location;
        this.since = since;
        this.seller = seller;
        this._img_urls = _img_urls;
        this.delivery_options = delivery_options;
    }
    Object.defineProperty(Product.prototype, "img_urls", {
        get: function () {
            return this._img_urls;
        },
        set: function (value) {
            this._img_urls = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create a TypeScript Product Object from a JSON object
     * @param jObj - the parsed JavaScript Object form
     * of our product model (actual object, not string)
     * @returns {Product}
     */
    Product.parseProduct = function (jObj) {
        var product = new Product();
        // populate primitive values
        product.iid = jObj['iid'];
        product.name = jObj['name'];
        product.description = jObj['description'];
        product.price = jObj['price'];
        product.since = jObj['since'];
        // different color due to being a setter
        product.img_urls = jObj['url'];
        // Category type
        product.category = {
            cid: jObj['cid'],
            name: jObj['cname']
        };
        // extract the location data and map it according to
        // ProductLocation type {province: string, city: string}
        product.location = {
            province: jObj['province'],
            city: jObj['city']
        };
        // extract the seller data and map it according to
        // SellerDetail type
        product.seller = {
            name: jObj['first_name'] + " " + jObj['last_name'],
            sid: jObj['seller_uid'],
            rating: jObj['rating'],
            rating_count: jObj['rating_count'],
            contact: jObj['phone']
        };
        // FIXME: We don't currently have any option in the dummies
        product.delivery_options = [];
        return product;
    };
    return Product;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/models/product.typing.js.map