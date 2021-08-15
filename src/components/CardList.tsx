import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [imageUrl, setImageUrl] = useState('');
  function handleSelectImageToModal(urlImage: string): void {
    setImageUrl(urlImage);
    onOpen();
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid column={3} spacing={4} minChildWidth={290}>
        {cards.map(card => {
          return (
            <Box
              key={card.id}
              width={290}
              height={290}
              background="gray.800"
              borderRadius={6}
            >
              <Image
                src={card.url}
                w={290}
                height={192}
                borderTopEndRadius={6}
                borderTopStartRadius={6}
                onClick={() => handleSelectImageToModal(card.url)}
                cursor="pointer"
                aria-label={card.title}
              />
              <Heading
                fontSize={24}
                fontWeight="bold"
                fontFamily="Roboto"
                color="gray.50"
                lineHeight="28px"
                marginLeft={25}
                marginTop={3}
              >
                {card.title}
              </Heading>
              <Heading
                fontFamily="Roboto"
                marginLeft={25}
                fontSize={16}
                color="gray.100"
              >
                {card.description}
              </Heading>
            </Box>
          );
        })}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageUrl} />
      )}
    </>
  );
}
