/**
 * @format
 * @jsxImportSource theme-ui
 */

import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ZK-Elixir</title>
        <meta
          name="description"
          content="Learn ZK-SNARK in 60 minutes, for complete beginners."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        sx={{
          px: [4, 4, 6],
          py: [4, 4, 5],
          height: ['auto', 'auto', '100vh'],
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span
          sx={{
            color: 'text',
            fontSize: ['2rem', '2.5rem', '3rem'],
            fontWeight: 'bold',
          }}
        >
          ZK-Elixir
        </span>
        <span
          sx={{ color: 'text', fontSize: ['1rem', '1.2rem', '1.2rem'], mt: 2 }}
        >
          Learn ZK-SNARK in 60 minutes, for complete beginners.
        </span>

        <span
          sx={{
            color: 'text',
            fontSize: ['1rem', '1.5rem', '1.5rem'],
            my: [3, 3, 4],
          }}
        >
          In a world of chaos and war, scientists have discovered a hidden cave
          which has its entrace closed with boulders heavier than we have ever
          seen. Archeologists have found rocks outside the cave with carvings in
          pre-historic glyphs claiming the cave contains a hidden "Elixir" which
          has answers to everything humans can ever ask. Discoveries prove that
          the only way to open the cave is by a number. The good news here is,
          they have also discovered an encrypted irreversible hash of the
          number, but the bad news is that we only have 1 shot at entering the
          number before the cave closes forever. The government has put a bounty
          of 30 million dollars to whoever finds the number first and a lot of
          people are now apparently claiming that they know the number.
          <br />
          <br />
          Agent 3.14, you are one of the best detectives this country has ever
          had. You have to find a way to verify who has the correct number
          because they want the money before they give you the number.
        </span>

        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            my: [1, 1, 0],
          }}
        >
          <a href="" target="_blank">
            <span
              sx={{
                textShadow: 'none',
                boxShadow: '3px 3px 7px #42ff6b',
                borderRadius: '4px',
                p: [2, 2, 2],
                fontSize: ['1rem', '1.5rem', '1.5rem'],
                borderColor: 'text',
                borderStyle: 'solid',
                borderWidth: '5px',
                height: 'inherit',
              }}
            >
              Register Now
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
