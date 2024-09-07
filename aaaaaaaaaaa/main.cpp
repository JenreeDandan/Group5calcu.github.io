#include <iostream>
#include <string>

int main() {
    std::string name;

    std::cout << "Enter your name: ";
    std::getline(std::cin, name);  // Reads the entire line of input including spaces

    std::cout << "Welcome, " << name << "!" << std::endl;

    return 0;
}