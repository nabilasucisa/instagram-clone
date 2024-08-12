import { TamaguiProvider, createTamagui } from "@tamagui/core";

import { config } from "@tamagui/config/v3";
import React from "react";
import {
  Button,
  XStack,
  Text,
  ScrollView,
  Image,
  YStack,
  ZStack,
  Label,
  View,
} from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "tamagui/linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// you usually export this from a tamagui.config.ts file

const tamaguiConfig = createTamagui(config);
// TypeScript types across all Tamagui APIs

const stories = [
  {
    id: 1,
    uri: "https://randomuser.me/api/portraits/women/72.jpg",
    name: "steph_annie",
  },
  {
    id: 2,
    uri: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "roy_smith",
  },
  {
    id: 3,
    uri: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "eliie2kim",
  },
  {
    id: 4,
    uri: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "johnn87",
  },
  {
    id: 5,
    uri: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "jod1eee",
  },
];

const FEEDS_DATA = [
  {
    id: 1,
    username: "Levi Ackerman",
    imageUrl:
      "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
    hasActiveStory: false,
    feed: {
      imageUrl:
        "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
      totalLikes: 10,
      friendLikes: [
        {
          name: "Dova",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        },
        {
          name: "Alan Walker",
          imageUrl:
            "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        },
        {
          name: "Oki",
          imageUrl:
            "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        },
      ],
      caption:
        "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
      totalComments: 5,
      postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
    },
  },
  {
    id: 2,
    username: "Alan Walker",
    imageUrl:
      "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
    hasActiveStory: false,
    feed: {
      imageUrl:
        "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
      totalLikes: 10,
      friendLikes: [
        {
          name: "Dova",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        },
        {
          name: "Levi",
          imageUrl:
            "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        },
        {
          name: "Oki",
          imageUrl:
            "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        },
      ],
      caption:
        "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
      totalComments: 5,
      postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
    },
  },
];

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export default () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TamaguiProvider config={tamaguiConfig}>
          <View>
            {/* Instagram text */}
            <XStack
              justifyContent="space-between"
              alignItems="center"
              paddingHorizontal={15}
              paddingVertical={5}
            >
              <XStack alignItems="center">
                {/* <Text textAlign="center" fontSize={32} padding={4} fontFamily="styleScript" color={"black"}>Instagram</Text> */}
                <Image
                  source={{
                    uri: "https://www.dafont.com/forum/attach/orig/7/3/737566.png?",
                    width: 120,
                    height: 35,
                  }}
                />
                <MaterialCommunityIcons name="chevron-down" size={30} />
              </XStack>
              <XStack gap={15}>
                <MaterialCommunityIcons name="heart-outline" size={30} />
                <MaterialCommunityIcons name="facebook-messenger" size={30} />
              </XStack>
            </XStack>

            {/* Story */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <XStack paddingVertical={10} paddingHorizontal={15}>
                <XStack gap={15} alignItems="center">
                  <YStack alignItems="center">
                    <Image
                      source={{
                        uri: "https://randomuser.me/api/portraits/women/52.jpg",
                        width: 75,
                        height: 75,
                      }}
                      borderRadius={50}
                    />
                    <XStack position="absolute" bottom={0} right={0}>
                      <ZStack position="absolute">
                        <MaterialCommunityIcons
                          name="circle"
                          size={30}
                          color="white"
                          style={{ position: "absolute", bottom: 15, right: 0 }}
                        />
                        <MaterialCommunityIcons
                          name="plus-circle"
                          size={30}
                          color="#0393f3"
                          style={{ position: "absolute", bottom: 15, right: 0 }}
                        />
                      </ZStack>
                    </XStack>
                    <Text>Your Story</Text>
                  </YStack>
                  <XStack gap={10}>
                    {stories.map(({ id, uri, name }) => (
                      <YStack alignItems="center" key={id}>
                        <LinearGradient
                          colors={[
                            "#cc2366",
                            "#bc1888",
                            "#bc1888",
                            "#fcc353",
                            "#f09433",
                            "#e6683c",
                            "#dc2743",
                          ]}
                          start={[0, 0]}
                          end={[1, 1]}
                          borderRadius={50}
                          padding={2}
                        >
                          <Image
                            source={{
                              uri,
                              width: 75,
                              height: 75,
                            }}
                            borderRadius={50}
                          />
                        </LinearGradient>
                        <Text>{name}</Text>
                      </YStack>
                    ))}
                  </XStack>
                </XStack>
              </XStack>
            </ScrollView>

            {/* FEEDS */}
            <ScrollView vertical showsVerticalScrollIndicator={false}>
              <YStack>
                <YStack paddingVertical={2} paddingHorizontal={15}>
                  <XStack
                    alignItems="center"
                    justifyContent="space-between"
                    gap={5}
                  >
                    <MaterialCommunityIcons
                      name="check-circle-outline"
                      size={30}
                      color={"#bc1888"}
                    />
                    <Text color={"grey"} fontSize={18}>
                      You've seen all new posts from the past 3 days from
                      accounts you follow.
                    </Text>
                  </XStack>
                  <XStack
                    paddingHorizontal={5}
                    paddingVertical={5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text color={"black"} fontSize={25}>
                      Suggested for you
                    </Text>
                    <Text color={"#0393f3"} fontSize={20}>
                      Older posts
                    </Text>
                  </XStack>
                </YStack>
                {/* FOTO NO PADDING */}
                {FEEDS_DATA.map((post) => {
                  return (
                    <YStack key={post.id} style={{ flex: 1 }}>
                      <XStack
                        backgroundColor={"white"}
                        justifyContent="space-between"
                      >
                        <XStack alignItems="center" padding={5}>
                          <Image
                            borderRadius={25}
                            source={{
                              uri: post.imageUrl,
                              width: 50,
                              height: 50,
                            }}
                          />
                          <Text paddingLeft={5} color={"black"}>
                            {post.username}
                          </Text>
                        </XStack>
                        <XStack alignItems="center">
                          <Button backgroundColor={"#f4f5f7"}>
                            <Label>Follow</Label>
                          </Button>
                          <MaterialCommunityIcons
                            name="dots-vertical"
                            size={20}
                          />
                        </XStack>
                      </XStack>
                      <Image
                        source={{
                          uri: post.feed.imageUrl,
                          height: 500,
                        }}
                      />
                      <XStack
                        backgroundColor={"white"}
                        padding={5}
                        justifyContent="space-between"
                      >
                        <XStack gap={5}>
                          <MaterialCommunityIcons
                            name="heart-outline"
                            size={24}
                          />
                          <MaterialCommunityIcons
                            name="chat-outline"
                            size={24}
                          />
                          <Ionicons
                            name="paper-plane-outline"
                            size={24}
                            color="black"
                          />
                        </XStack>
                        <XStack>
                          <Ionicons
                            name="bookmark-outline"
                            size={24}
                            color="black"
                          />
                        </XStack>
                      </XStack>
                      <XStack backgroundColor={"white"} paddingLeft={5}>
                        <XStack position="relative" paddingVertical={15}>
                          {post.feed.friendLikes
                            .slice(0, 3)
                            .map(({ imageUrl, name }, index) => (
                              <Image
                                key={name}
                                source={{
                                  uri: imageUrl,
                                  width: 24,
                                  height: 24,
                                }}
                                borderRadius={50}
                                position="absolute"
                                left={(index * 25) / 2}
                              />
                            ))}
                        </XStack>
                        <Text marginLeft={2 * 25 + 10}>
                          Liked by{" "}
                          <Text fontWeight={700}>
                            {post.feed.friendLikes[0].name}
                          </Text>{" "}
                          and 9 others
                        </Text>
                      </XStack>
                      <YStack backgroundColor={"white"} paddingLeft={5}>
                        <Text gap={20}>
                          <Text
                            style={{
                              fontWeight: "bold",
                              marginRight: 5,
                              color: "black",
                            }}
                          >
                            {post.username}
                            {"  "}
                          </Text>
                          <Text numberOfLines={2} style={{ color: "black" }}>
                            {post.feed.caption}
                          </Text>
                        </Text>
                        <Text color={"black"}>
                          View all {post.feed.totalComments}
                        </Text>
                        <Text color={"black"}>
                          {formatDate(post.feed.postDate)}
                        </Text>
                      </YStack>
                    </YStack>
                  );
                })}
              </YStack>
            </ScrollView>
            {/* Tab home, search, plus, video, ava-me */}
            <View
              style={{
                position: "absolute",
                zIndex: 999,
                bottom: 0,
              }}
            >
              <XStack
                style={{
                  backgroundColor: "#FFFFFF",
                  borderTopWidth: 1,
                  borderColor: "#a3a3a3cb",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: 10,
                  zIndex: 9999,
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: 100,
                }}
              >
                <Foundation name="home" size={30} color="black" />
                <Ionicons name="search" size={30} color="black" />
                <Octicons name="diff-added" size={30} color="black" />
                <MaterialIcons name="ondemand-video" size={30} color="black" />
                <XStack
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 200,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://randomuser.me/api/portraits/women/52.jpg",
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 200,
                      objectFit: "cover",
                      borderWidth: 1,
                      borderColor: "gray",
                    }}
                  />
                </XStack>
              </XStack>
            </View>
          </View>
        </TamaguiProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
