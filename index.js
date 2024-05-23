// pages/index.js

import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Heading, Text } from '@shadcn/ui'; // Import necessary UI components

// Import the content.json data
import content from '../content.json';

export default function Home() {
  const router = useRouter();
  
  // Extract header data from content.json
  const { header } = content;

  return (
    <Container>
      <Head>
        <title>{header.name}</title>
      </Head>
      <main>
        <Heading as="h1" size="xl">
          {header.name}
        </Heading>
        <Text mt={4} fontSize="lg">
          {header.description}
        </Text>
        {/* Add more sections or components to display additional content */}
      </main>
    </Container>
  );
}
