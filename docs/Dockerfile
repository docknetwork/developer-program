FROM ruby:2.7.4-alpine3.14 AS production

RUN apk add --update --no-cache bash\
  build-base \
  tzdata \
  nodejs \
  yarn

RUN yarn global add execjs
RUN gem install bundler

WORKDIR /app

COPY Gemfile* ./

RUN bundle config set --local path 'vendor/bundle'
RUN bundle install --no-cache --retry 3 --jobs 4

COPY package.json yarn.lock ./
RUN yarn install --check-files && yarn cache clean

COPY . .

CMD ["cat"]
