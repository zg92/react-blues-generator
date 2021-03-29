def parse_lyrics():
    with open('lyrics.txt', 'r') as fp:
        split_lines = fp.read().split('\n\n')
        split_lines = list(map(lambda x: x.replace('\n','/'), split_lines))
        write_parsed_lyrics(split_lines)

def write_parsed_lyrics(parsed_lines):
    with open('parsed_lyrics.txt','w') as fp:
        fp.write(str(parsed_lines))
        print('success')

if __name__ == "__main__":
    parse_lyrics()

