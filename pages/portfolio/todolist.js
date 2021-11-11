import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/portfolio-detail'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ToDoList = () => {
  return (
    <Layout title="To-Do List">
      <Container maxW="container.md">
        <Title>To-Do List</Title>
        <Paragraph>
          A minimalistic to-do list app built with vanilla JavaScript and the
          Skeleton CSS framework. This is the result of my first attempt to
          create an app entirely on my own. This project humbled me, and pushed
          me to improve my understanding of the fundamentals of web development.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://jojojacky.github.io/ToDoListVanillaJs/">
              https://jojojacky.github.io/ToDoListVanillaJs/{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/JoJoJacKy/ToDoListVanillaJs">
              https://github.com/JoJoJacKy/ToDoListVanillaJs{' '}
              <ExternalLinkIcon mx="2px" />{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              JavaScript, Webpack, Nodejs,{' '}
              <Link href="http://getskeleton.com/">Skeleton (CSS) </Link>{' '}
            </span>
          </ListItem>
        </List>

        <PortfolioImage
          src="/images/portfolio/toDoList/todolist1.png"
          alt="To Do List"
        />

        <PortfolioImage
          src="/images/portfolio/toDoList/todolist2.png"
          alt="To Do List"
        />
        <PortfolioImage
          src="/images/portfolio/toDoList/todolist3.png"
          alt="To Do List"
        />
      </Container>
    </Layout>
  )
}

export default ToDoList
