import React, { useState, Component } from 'react'


import { Card, CardItem, Thumbnail, Text, Icon, Left, Body, Input } from 'native-base'



export default function Principal(props) {
    return (
        <Background color='white'>

            <Search placeholder='Pesquise aqui...' />
            <ScrollView>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={} />
                            <Body>
                                <Text>Zuleika</Text>
                                <Text note>Motorista</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={} />
                    </CardItem>
                    <CardItem>
                        <Button>
                            <Icon active name="thumbs-up" />
                            <Comments>53 Likes</Comments>
                        </Button>
                        <Button>
                            <Icon active name="chatbubbles" />
                            <Comments>Contact</Comments>
                        </Button>
                        <Button>
                            <Icon active name="heart" />
                            <Comments>Favorite</Comments>
                        </Button>
                    </CardItem>
                </Card>


                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={} />
                            <Body>
                                <Text>Maria Luiza</Text>
                                <Text note>Babá</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={} />
                    </CardItem>
                    <CardItem>
                        <Button>
                            <Icon active name="thumbs-up" />
                            <Comments>53 Likes</Comments>
                        </Button>
                        <Button>
                            <Icon active name="chatbubbles" />
                            <Comments>Contact</Comments>
                        </Button>
                        <Button>
                            <Icon active name="heart" />
                            <Comments>Favorite</Comments>
                        </Button>
                    </CardItem>
                </Card>


                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={} />
                            <Body>
                                <Text>João Carlos</Text>
                                <Text note>Eletricista</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={} />
                    </CardItem>
                    <CardItem>
                        <Button>
                            <Icon active name="thumbs-up" />
                            <Comments>53 Likes</Comments>
                        </Button>
                        <Button>
                            <Icon active name="chatbubbles" />
                            <Comments>Contact</Comments>
                        </Button>
                        <Button>
                            <Icon active name="heart" />
                            <Comments>Favorite</Comments>
                        </Button>
                    </CardItem>
                </Card>


                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={} />
                            <Body>
                                <Text>Emerson Silveira</Text>
                                <Text note>Empreiteiro</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={} />
                    </CardItem>
                    <CardItem>
                        <Button>
                            <Icon active name="thumbs-up" />
                            <Comments>53 Likes</Comments>
                        </Button>
                        <Button>
                            <Icon active name="chatbubbles" />
                            <Comments>Contact</Comments>
                        </Button>
                        <Button>
                            <Icon active name="heart" />
                            <Comments>Favorite</Comments>
                        </Button>
                    </CardItem>
                </Card>
            </ScrollView>
        </ Background>

    );
}
