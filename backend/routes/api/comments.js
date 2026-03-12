
/**
 * Express router for handling API comment routes
 * @type {Router}
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    /**
     * Retrieves all comments from the database.
     * @async
     * @function
     * @returns {Promise<Array>} A promise that resolves to an array of all comment documents.
     * @throws {Error} If the database query fails.
     */
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        /**
         * Deletes a comment by its ID
         * @async
         * @param {Object} req - Express request object
         * @param {string} req.params.id - The ID of the comment to delete
         * @returns {Promise<Object|null>} The deleted comment object, or null if not found
         * @throws {Error} If database operation fails
         */
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

