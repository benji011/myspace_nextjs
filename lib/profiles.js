import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const profilesDirectory = path.join(process.cwd(), 'profiles')

export function getSortedProfilesData() {
  // Get file names under /profiles
  const fileNames = fs.readdirSync(profilesDirectory)
  const allProfilesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(profilesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort profiles by date
  return allProfilesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}