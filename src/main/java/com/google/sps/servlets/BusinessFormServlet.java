
package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;

import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;


@WebServlet("/form-handler")
public class BusinessFormServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
   // Sanitize user input to remove HTML tags and JavaScript.
    //look for the name of the element for the input in the html file

    
    String description = Jsoup.clean(request.getParameter("description-input"), Whitelist.none());
    String name = Jsoup.clean(request.getParameter("name-input"), Whitelist.none());
    String street = Jsoup.clean(request.getParameter("address-input"), Whitelist.none());
    String city = Jsoup.clean(request.getParameter("city-input"), Whitelist.none());
    String state = Jsoup.clean(request.getParameter("state-input"), Whitelist.none());
    String zip = Jsoup.clean(request.getParameter("zip-input"), Whitelist.none());
    String number = Jsoup.clean(request.getParameter("number-input"), Whitelist.none());
    String apprenticeship = Jsoup.clean(request.getParameter("apprenticeship-input"), Whitelist.none());
    String sun1 = Jsoup.clean(request.getParameter("sun1"), Whitelist.none());
    String sun2 = Jsoup.clean(request.getParameter("sun2"), Whitelist.none());
    String mon1 = Jsoup.clean(request.getParameter("mon1"), Whitelist.none());
    String mon2 = Jsoup.clean(request.getParameter("mon2"), Whitelist.none());
    String wed1 = Jsoup.clean(request.getParameter("wed1"), Whitelist.none());
    String wed2 = Jsoup.clean(request.getParameter("wed2"), Whitelist.none());
    String thur1 = Jsoup.clean(request.getParameter("thur1"), Whitelist.none());
    String thur2 = Jsoup.clean(request.getParameter("thur2"), Whitelist.none());
    String fri1 = Jsoup.clean(request.getParameter("fri1"), Whitelist.none());
    String fri2 = Jsoup.clean(request.getParameter("fri2"), Whitelist.none());
    String sat1 = Jsoup.clean(request.getParameter("sat1"), Whitelist.none());
    String sat2 = Jsoup.clean(request.getParameter("sat2"), Whitelist.none());
    String tue1 = Jsoup.clean(request.getParameter("tue1"), Whitelist.none());
    String tue2 = Jsoup.clean(request.getParameter("tue2"), Whitelist.none());

    // String email = Jsoup.clean(request.getParameter("email-input"), Whitelist.none());
    // String website = Jsoup.clean(request.getParameter("website-input"), Whitelist.none());


    


    
    long timestamp = System.currentTimeMillis();

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Business Data");
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("description", description)
            .set("name", name)
            .set("timestamp", timestamp)
            // .set("email", email)
            // .set("website", website)
            .set("street", street)
            .set("city", city)
            .set("state", state)
            .set("zipcode", zip)
            .set("Tel", number)
            .set("apprenticeship", apprenticeship)
            .set("sunday1", sun1)
            .set("sunday2", sun2)
            .set("monday1", mon1)
            .set("monday2", mon2)
            .set("tuesday1", tue1)
            .set("tuesday2", tue2)
            .set("wednesday1", wed1)
            .set("wednesday2", wed2)
            .set("thursday1", thur1)
            .set("thursday2", thur2)
            .set("friday1", fri1)
            .set("friday2", fri2)
            .set("saturday1", sat1)
            .set("saturday2", sat2)
            
            .build();
    datastore.put(taskEntity);
    
    response.sendRedirect("/BusinessForm.html");
  }
}
