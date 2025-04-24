import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IdentityVerificationSessionCancelBody,
  IdentityVerificationSessionCancelBody,
  Schemas$IdentityVerificationSessionCancelBody,
} from "@sideko-inc/stripe/types/identity-verification-session-cancel-body";
import {
  External$IdentityVerificationSessionCreateBody,
  IdentityVerificationSessionCreateBody,
  Schemas$IdentityVerificationSessionCreateBody,
} from "@sideko-inc/stripe/types/identity-verification-session-create-body";
import {
  External$IdentityVerificationSessionListCreatedObj0,
  IdentityVerificationSessionListCreatedObj0,
  Schemas$IdentityVerificationSessionListCreatedObj0,
} from "@sideko-inc/stripe/types/identity-verification-session-list-created-obj0";
import {
  External$IdentityVerificationSessionRedactBody,
  IdentityVerificationSessionRedactBody,
  Schemas$IdentityVerificationSessionRedactBody,
} from "@sideko-inc/stripe/types/identity-verification-session-redact-body";
import {
  External$IdentityVerificationSessionUpdateBody,
  IdentityVerificationSessionUpdateBody,
  Schemas$IdentityVerificationSessionUpdateBody,
} from "@sideko-inc/stripe/types/identity-verification-session-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string | undefined;
  /**
   * Only return VerificationSessions that were created during the given date interval.
   */
  created?: (IdentityVerificationSessionListCreatedObj0 | number) | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  relatedCustomer?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
   */
  status?:
    | ("canceled" | "processing" | "requires_input" | "verified")
    | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  client_reference_id?: string | undefined;
  created?:
    | (External$IdentityVerificationSessionListCreatedObj0 | number)
    | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  related_customer?: string | undefined;
  starting_after?: string | undefined;
  status?:
    | ("canceled" | "processing" | "requires_input" | "verified")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_reference_id: z.string().optional(),
    created: z
      .union([
        Schemas$IdentityVerificationSessionListCreatedObj0.in,
        z.number().int(),
      ])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    related_customer: z.string().optional(),
    starting_after: z.string().optional(),
    status: z
      .enum(["canceled", "processing", "requires_input", "verified"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      client_reference_id: "clientReferenceId",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      related_customer: "relatedCustomer",
      starting_after: "startingAfter",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    clientReferenceId: z.string().optional(),
    created: z
      .union([
        Schemas$IdentityVerificationSessionListCreatedObj0.out,
        z.number().int(),
      ])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    relatedCustomer: z.string().optional(),
    startingAfter: z.string().optional(),
    status: z
      .enum(["canceled", "processing", "requires_input", "verified"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientReferenceId: "client_reference_id",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      relatedCustomer: "related_customer",
      startingAfter: "starting_after",
      status: "status",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  session: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  session: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    session: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    session: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data?: IdentityVerificationSessionCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$IdentityVerificationSessionCreateBody | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IdentityVerificationSessionCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IdentityVerificationSessionCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: IdentityVerificationSessionUpdateBody | undefined;
  session: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$IdentityVerificationSessionUpdateBody | undefined;
  session: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IdentityVerificationSessionUpdateBody.in.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IdentityVerificationSessionUpdateBody.out.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: IdentityVerificationSessionCancelBody | undefined;
  session: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$IdentityVerificationSessionCancelBody | undefined;
  session: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IdentityVerificationSessionCancelBody.in.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IdentityVerificationSessionCancelBody.out.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * RedactRequest
 */
export type RedactRequest = {
  data?: IdentityVerificationSessionRedactBody | undefined;
  session: string;
};

/**
 * @internal
 * RedactRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RedactRequest = {
  data?: External$IdentityVerificationSessionRedactBody | undefined;
  session: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RedactRequest
 */
const SchemaIn$RedactRequest: z.ZodType<
  RedactRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IdentityVerificationSessionRedactBody.in.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RedactRequest
 */
const SchemaOut$RedactRequest: z.ZodType<
  External$RedactRequest, // output type of this zod object
  z.ZodTypeDef,
  RedactRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IdentityVerificationSessionRedactBody.out.optional(),
    session: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      session: "session",
    });
  });

export const Schemas$RedactRequest = {
  in: SchemaIn$RedactRequest,
  out: SchemaOut$RedactRequest,
};
