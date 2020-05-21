puts "nombre"
print "> "
n = Integer(gets.chomp)+1
n.times do |i|
    print " "*(n-i)
    print "#"*i
    puts ""
end