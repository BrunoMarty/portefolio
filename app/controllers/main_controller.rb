class MainController < ApplicationController
  def index
    @title = "Portfolio"
    @home = Home.all
    @skills = Skill.all
    @formations = Formation.all
    @tableau = Array.new
    @projects = Project.all
    @skills.each do |skill|

      if skill.fk == nil
        @tableau.push(skill.name)
      end
    end
  end
end
