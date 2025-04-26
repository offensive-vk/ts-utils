import * as fs from 'fs/promises';
import * as path from 'path';

async function listDirectoryContents(pathToDir: string): Promise<void> {
  try {
    const files = await fs.readdir(pathToDir);
    console.log(`Contents of directory: ${pathToDir}`);

    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(pathToDir, file);
        const stat = await fs.stat(filePath);

        if (stat.isDirectory()) {
          console.log(`Directory: ${file}`);
        } else {
          console.log(`File: ${file}`);
        }
      })
    );
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
  }
}
