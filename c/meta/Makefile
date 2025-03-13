SRSC = $(wildcard *.c)
PROGS = $(patsubst %.c,%,$(SRSC))

all:$(PROGS)
% : %.c
	gcc -o $@ $^
clean : $(PROGS)
	rm -rf $^