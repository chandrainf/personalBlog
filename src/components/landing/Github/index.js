import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Project, GithubIcon, Container, Subtitle } from '../../common'

export const Github = () => (
  <StaticQuery
    query={graphql`
      {
        github {
          repositoryOwner(login: "chandrainf") {
            repositories(
              first: 7
              orderBy: { field: STARGAZERS, direction: DESC }
              isFork: false
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `}
    render={({ github }) => {
      return (
        <Container>
          <Subtitle>Open Source</Subtitle>
          <Project
            icon={GithubIcon}
            type="Github"
            projects={github.repositoryOwner.repositories.edges}
            link="https://github.com/chandrainf"
            color="#000"
            github
          />
        </Container>
      )
    }}
  />
)
