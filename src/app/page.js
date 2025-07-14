import { CardPost } from "@/components/CardPost";
import styles from './page.module.css'
import logger from "@/logger";

async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts')
  if (!response.ok) {
    logger.error('Erro ao consumir API!')
    return []
  }
  logger.info('Posts obtidos com sucesso!')
  return response.json()
}

export default async function Home() {
  const posts = await getAllPosts()
  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
    </main>
  );
}
