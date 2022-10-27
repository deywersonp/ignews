import { render, screen } from '@testing-library/react';
import Posts, { getStaticProps } from '../../pages/posts';
import { createClient } from '../../services/prismic'

jest.mock('../../services/prismic')

const posts = [
  { slug: 'my-new-post', title: 'My new post', excerpt: 'Post excerpt', updatedAt: '10 de Abril' }
]

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText('My new post')).toBeInTheDocument();
  });

  it('loads initial data', async () => {
    const getPrismicClientMocked = jest.mocked(createClient);

    getPrismicClientMocked.mockReturnValueOnce({
      getAllByType: jest.fn().mockResolvedValueOnce(
        [
          {
            uid: "fake-slug",
            data: {
              title: [
                {
                  type: "heading1",
                  text: "Fake title 1",
                },
              ],
              content: [
                {
                  type: "paragraph",
                  text: "Fake excerpt 1",
                },
              ],
            },
            last_publication_date: "2022-04-22T03:00:00.000Z",
          },
        ],
      ),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: "fake-slug",
              title: "Fake title 1",
              excerpt: "Fake excerpt 1",
              updatedAt: "22 de abril de 2022",
            }
          ]
        }
      })
    )
  });
});