import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';

export function GridCard(props) {
    return (
        <Grid>
            <Grid.Col span={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src={props.image}
                            height={160}
                            alt="Production"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{props.title}</Text>
                        <Badge color="pink" variant="light">
                            $  {props.price}
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {props.description}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Add 
                    </Button>
                </Card>
            </Grid.Col>
        </Grid>
    )
}