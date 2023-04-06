package grails.react
import  grails.rest.*

@Resource(uri='/clients')
class Clients {
    String name
    String address
    Integer total_item
    Integer total_spent


    static constraints = {
        name blank: false
        address blank: false
        total_item blank: false
        total_spent blank: false
    }

    String toString() {
        name
    }
}
