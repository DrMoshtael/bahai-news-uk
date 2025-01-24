import { VStack } from "./ui/vstack"
import { HStack } from "./ui/hstack"
import { Input, InputField, InputIcon, InputSlot } from "./ui/input"
import { SearchIcon, DownloadIcon } from "./ui/icon"
import { Heading } from "./ui/heading"
import { Box } from "./ui/box"
import { Image } from "./ui/image"
import { Text } from "./ui/text"
// import { Avatar, AvatarFallbackText } from "./ui/avatar"
// import { Button, ButtonIcon, ButtonText } from "./ui/button"
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb"

import { ScrollView } from "react-native"

import { NEWS_DATA, WORLD_DATA } from "@/db"

const NewsFeed = () => {
    return (
      <VStack
        className="p-4 pb-0 md:px-10 md:pt-6 md:pb-0 h-full w-full max-w-[1500px] self-center  mb-20 md:mb-2"
        space="2xl"
      >
        <Input className="text-center md:hidden border-border-100">
          <InputField placeholder="Search" />
          <InputSlot className="pr-3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
        </Input>
        <Heading size="2xl" className="font-roboto">
          What's new?
        </Heading>
        <HStack space="2xl" className="h-full w-full flex-1">
          <ScrollView
            className="max-w-[900px] flex-1 md:mb-2"
            contentContainerStyle={{
              paddingBottom: isWeb ? 0 : 140,
            }}
            showsVerticalScrollIndicator={false}
          >
            <VStack className="w-full" space="2xl">
              {NEWS_DATA.map((item, index) => {
                return (
                  <VStack
                    className="rounded-xl border border-border-300 p-5"
                    key={index}
                  >
                    <Box className="w-full h-64 rounded">
                      <Image
                        size="full"
                        source={item.bannerUri}
                        alt={item.title}
                        resizeMode="cover"
                      />
                    </Box>
                    <VStack className="mt-4" space="md">
                      <Text className="text-sm">{item.publishedDate}</Text>
                      <Heading size="md">{item.title}</Heading>
                      <Text className="line-clamp-2">{item.description}</Text>
                    </VStack>
                  </VStack>
                );
              })}
            </VStack>
          </ScrollView>
          <VStack className="max-w-[500px] hidden lg:flex" space="2xl">
            <Input className="text-center">
              <InputField placeholder="Search" />
              <InputSlot className="pr-3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
            </Input>
            <VStack>
              <ScrollView showsVerticalScrollIndicator={false} className="gap-7">
                <VStack space="lg">
                  <Heading size="lg">From around the world</Heading>
                  <VStack className="h-full" space="md">
                    {WORLD_DATA.map((item, index) => {
                      return (
                        <HStack
                          className="p-3 items-center h-full border border-border-300 rounded-xl"
                          space="lg"
                          key={index}
                        >
                          <Box className="relative h-full w-40 rounded">
                            <Image
                              size="full"
                              resizeMode="cover"
                              source={item.bannerUri}
                              alt={item.title}
                            />
                          </Box>
                          <VStack className="justify-between h-full" space="md">
                            <Text className="text-sm">{item.publishedDate}</Text>
                            <Heading size="md">{item.title}</Heading>
                            <Text className="line-clamp-2">
                              {item.description}
                            </Text>
                          </VStack>
                        </HStack>
                      );
                    })}
                  </VStack>
                </VStack>
                {/* <VStack space="lg" className="mt-7">
                  <Heading size="lg">Find creators</Heading>
                  <VStack className="h-full" space="md">
                    {CREATORS_DATA.map((item, index) => {
                      return (
                        <HStack
                          className="p-4 items-center h-full border border-border-300 rounded-xl"
                          space="lg"
                          key={index}
                        >
                          <Avatar>
                            <Avatar>
                              <AvatarFallbackText>
                                {item.name?.[0] ?? "U"}
                              </AvatarFallbackText>
                            </Avatar>
                          </Avatar>
                          <Button
                            variant="outline"
                            action="secondary"
                            className="p-2"
                          >
                            <ButtonIcon as={DownloadIcon} />
                          </Button>
                          <VStack>
                            <Text className="font-semibold text-typography-900">
                              {item.name}
                            </Text>
                            <Text className="line-clamp-1 text-sm">
                              {item.description}
                            </Text>
                          </VStack>
                          <Button action="secondary" variant="outline">
                            <ButtonText>Follow</ButtonText>
                          </Button>
                        </HStack>
                      );
                    })}
                  </VStack>
                </VStack> */}
              </ScrollView>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    );
  };

  export default NewsFeed