/**
 * Created by Andy on 8/4/17.
 *
 * Feedback is the form received from the user after he or she completed the form.
 * This can only be done after the user has bought the product.
 *
 *
 * This file merely contain a `type` interface for Feedback.
 * It serves only to tell the compiler to check if a given object
 * meets its specification.
 */
export var Feedback = (function () {
    function Feedback(b, s, p, score, comment) {
        this.buyerID = b;
        this.sellerID = s;
        this.productID = p;
        this.score = score;
        this.comment = comment;
    }
    return Feedback;
}());
//# sourceMappingURL=/Users/Woods/ProgrammingProjects/restful-kaidee/src/models/feedback.typing.js.map