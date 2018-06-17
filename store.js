module.exports = {
  createLevel ({ user_id, slug, name, data, best, played, won, created_at, updated_at, screenshot }) {
    console.log(`Add ${user_id}, ${slug}, ${name}, ${data}, ${best}, ${played}, ${won}, ${created_at}, ${updated_at}, and ${screenshot}`);
    return Promise.resolve()
  }
};

