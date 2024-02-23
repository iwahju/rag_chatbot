import { promises as fs } from 'fs';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

try {
  // const result = await fetch('scrimba-info.txt')
  // const text = await result.text()
  const text = await fs.readFile('scrimba-info.txt', 'utf8');
  
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    separators: ['\n\n', '\n',' ', ''], //default setting
    chunkOverlap: 50
    
  })
  
  const output = await splitter.createDocuments([text])
  console.log(output)
} catch (err) {
  console.log(err)
}
