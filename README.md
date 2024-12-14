{
	"info": {
		"_postman_id": "387d673e-772b-46e4-a784-6eb27bd85d02",
		"name": "Job-Finder",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "33887964"
	},
	"item": [
		{
			"name": "Auth",
			"item": [
				{
					"name": "Login",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNjllMjM2YzE5ZjgyMTJjYmQzMTEiLCJpYXQiOjE3MzQxNDg2ODcsImV4cCI6MTczNjc0MDY4N30.qL2egZ5gDKz20wi3RvSzL2Q1KTVnJVt7TZ4-ZsbDucs",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n        \"email\": \"aungaung@gmail.com\",\r\n        \"password\": \"aungaung\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/auth/login",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"auth",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "Signup",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\":\"hlahla\",\r\n    \"email\":\"hlahla@gmail.com\",\r\n    \"password\":\"hlahla\",\r\n    \"contact\":\"09788788789\",\r\n    \"address\":\"hlaing\",\r\n    \"user_Type\":\"job-seeker\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/auth/signup",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"auth",
								"signup"
							]
						}
					},
					"response": []
				},
				{
					"name": "Logout",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzU3ZWQ3ODU4MjQyNzdkY2RkYzAwOTUiLCJpYXQiOjE3MzM4MTU2NzIsImV4cCI6MTczNjQwNzY3Mn0.B5XmL8Z6HarOayylQ-5sefBZ8MBErOo9JiwWZ1d3IP8",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/auth/logout",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"auth",
								"logout"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "employer",
			"item": [
				{
					"name": "post employer",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQxNTA4NTEsImV4cCI6MTczNjc0Mjg1MX0.5cnAvYZenqV5ZGD5ZaceJsNDnyVe0mm4JefkaeNeawA",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"companyName\":\"Grand Palace\",\r\n    \"companyAddress\":\"myanmar\",\r\n    \"companyContact\":\"0984884848\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/employer",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"employer"
							]
						}
					},
					"response": []
				},
				{
					"name": "employer id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQxNTA4NTEsImV4cCI6MTczNjc0Mjg1MX0.5cnAvYZenqV5ZGD5ZaceJsNDnyVe0mm4JefkaeNeawA",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/employer/675d0cd09c4009cbf104c4a9",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"employer",
								"675d0cd09c4009cbf104c4a9"
							]
						}
					},
					"response": []
				},
				{
					"name": "patch employer",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzU3ZWQ3ODU4MjQyNzdkY2RkYzAwOTUiLCJpYXQiOjE3MzM5NzU0NzksImV4cCI6MTczNjU2NzQ3OX0.RPol3kVcvvtGfYQLetgDcr1HFlPkb2dkvWYh4Ty-8Gw",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"companyAddress\": \"yankin\",\r\n    \"address\":\"hlegu\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/employer/675a5ed2b637a9d16e0e3de7",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"employer",
								"675a5ed2b637a9d16e0e3de7"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "job-seeker",
			"item": [
				{
					"name": "post seeker",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNjllMjM2YzE5ZjgyMTJjYmQzMTEiLCJpYXQiOjE3MzM5Nzg2MzEsImV4cCI6MTczNjU3MDYzMX0.66Q6hCU6tK6QTCVcKWKYQ7rL1nVHB3aHh3GlHMkaQ-E",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"skills\":\"react,next.js\",\r\n    \"location\":\"insein\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/seeker",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"seeker"
							]
						}
					},
					"response": []
				},
				{
					"name": "get seeker",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNjllMjM2YzE5ZjgyMTJjYmQzMTEiLCJpYXQiOjE3MzM5Nzg2MzEsImV4cCI6MTczNjU3MDYzMX0.66Q6hCU6tK6QTCVcKWKYQ7rL1nVHB3aHh3GlHMkaQ-E",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/seeker/675a6a6136c19f8212cbd318",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"seeker",
								"675a6a6136c19f8212cbd318"
							]
						}
					},
					"response": []
				},
				{
					"name": "patch seeker",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNjllMjM2YzE5ZjgyMTJjYmQzMTEiLCJpYXQiOjE3MzM5Nzg2MzEsImV4cCI6MTczNjU3MDYzMX0.66Q6hCU6tK6QTCVcKWKYQ7rL1nVHB3aHh3GlHMkaQ-E",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"location\":\"taungoo\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/seeker/675a6a6136c19f8212cbd318",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"seeker",
								"675a6a6136c19f8212cbd318"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "{{local}}/api/v1/user",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNjllMjM2YzE5ZjgyMTJjYmQzMTEiLCJpYXQiOjE3MzM5Nzg2MzEsImV4cCI6MTczNjU3MDYzMX0.66Q6hCU6tK6QTCVcKWKYQ7rL1nVHB3aHh3GlHMkaQ-E",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/user",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"user"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "post job",
			"item": [
				{
					"name": "post job with employer",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQxNTM2MDYsImV4cCI6MTczNjc0NTYwNn0.OEj6taE7KNkGQvmA4ZLZaSIsVAWftdFm9GBog8r0hao",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"category\":\"System Analyst\",\r\n    \"title\":\"test1\",\r\n    \"description\":\"blah blah\",\r\n    \"job_location\":\"remote\",\r\n    \"salary\":400000,\r\n    \"job_type\":\"fulltime\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/jobs",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"jobs"
							]
						}
					},
					"response": []
				},
				{
					"name": "get jobpost",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQwNzUwODAsImV4cCI6MTczNjY2NzA4MH0.QW0kAz7ssucIx4lYm__fNrJcdjh7WNrpOnUvbIi8IgU",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/jobs",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"jobs"
							]
						}
					},
					"response": []
				},
				{
					"name": "get jobpost Id",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQwNzUwODAsImV4cCI6MTczNjY2NzA4MH0.QW0kAz7ssucIx4lYm__fNrJcdjh7WNrpOnUvbIi8IgU",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/jobs/675be43475fc0aba534edfc1",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"jobs",
								"675be43475fc0aba534edfc1"
							]
						}
					},
					"response": []
				},
				{
					"name": "patch jobpost",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQwNzUwODAsImV4cCI6MTczNjY2NzA4MH0.QW0kAz7ssucIx4lYm__fNrJcdjh7WNrpOnUvbIi8IgU",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"title\": \"test3\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/jobs/675be43475fc0aba534edfc1",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"jobs",
								"675be43475fc0aba534edfc1"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete jobpost",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQwNzUwODAsImV4cCI6MTczNjY2NzA4MH0.QW0kAz7ssucIx4lYm__fNrJcdjh7WNrpOnUvbIi8IgU",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/jobs/675be418098013a5eb7a366a",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"jobs",
								"675be418098013a5eb7a366a"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Application",
			"item": [
				{
					"name": "post application",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNjllMjM2YzE5ZjgyMTJjYmQzMTEiLCJpYXQiOjE3MzQxNDg2ODcsImV4cCI6MTczNjc0MDY4N30.qL2egZ5gDKz20wi3RvSzL2Q1KTVnJVt7TZ4-ZsbDucs",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"jobPost\":\"675be43475fc0aba534edfc1\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/application",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"application"
							]
						}
					},
					"response": []
				},
				{
					"name": "change status",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQxNDk2NjgsImV4cCI6MTczNjc0MTY2OH0.OJltfoNUjRPV_GKeOWSr7q_r9tB0PmgFtEky9kkDhIc",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"status\":\"rejected\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{local}}/api/v1/application/675d02bfcfee5b17b166fcf6",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"application",
								"675d02bfcfee5b17b166fcf6"
							]
						}
					},
					"response": []
				},
				{
					"name": "get application userId",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNjllMjM2YzE5ZjgyMTJjYmQzMTEiLCJpYXQiOjE3MzQxNDg2ODcsImV4cCI6MTczNjc0MDY4N30.qL2egZ5gDKz20wi3RvSzL2Q1KTVnJVt7TZ4-ZsbDucs",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/application/userId",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"application",
								"userId"
							]
						}
					},
					"response": []
				},
				{
					"name": "get application jobId",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQxNDk2NjgsImV4cCI6MTczNjc0MTY2OH0.OJltfoNUjRPV_GKeOWSr7q_r9tB0PmgFtEky9kkDhIc",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/application/jobPostId",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"application",
								"jobPostId"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Job Category",
			"item": [
				{
					"name": "get Category",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQxNTM2MDYsImV4cCI6MTczNjc0NTYwNn0.OEj6taE7KNkGQvmA4ZLZaSIsVAWftdFm9GBog8r0hao",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/category",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"category"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Job Skill",
			"item": [
				{
					"name": "get skill",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVhNWQ5NTY4NGZlODNlYjkyODZjMzMiLCJpYXQiOjE3MzQxNTM2MDYsImV4cCI6MTczNjc0NTYwNn0.OEj6taE7KNkGQvmA4ZLZaSIsVAWftdFm9GBog8r0hao",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{local}}/api/v1/skill",
							"host": [
								"{{local}}"
							],
							"path": [
								"api",
								"v1",
								"skill"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}
