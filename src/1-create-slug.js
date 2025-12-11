// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {


  if (title.includes('!') || title.includes('#') || title.includes('?')) {
    return null
  } else {
    let lowercase = title.toLowerCase()
    let hyphens = lowercase.split(' ').join('-')
    return hyphens
  } 
};


module.exports = {
  createSlug,
};
