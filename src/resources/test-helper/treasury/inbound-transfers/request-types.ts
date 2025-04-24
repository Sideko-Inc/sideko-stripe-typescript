import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperTreasuryInboundTransfersFailBody,
  Schemas$TestHelperTreasuryInboundTransfersFailBody,
  TestHelperTreasuryInboundTransfersFailBody,
} from "@sideko-inc/stripe/types/test-helper-treasury-inbound-transfers-fail-body";
import {
  External$TestHelperTreasuryInboundTransfersReturnedBody,
  Schemas$TestHelperTreasuryInboundTransfersReturnedBody,
  TestHelperTreasuryInboundTransfersReturnedBody,
} from "@sideko-inc/stripe/types/test-helper-treasury-inbound-transfers-returned-body";
import {
  External$TestHelperTreasuryInboundTransfersSucceedBody,
  Schemas$TestHelperTreasuryInboundTransfersSucceedBody,
  TestHelperTreasuryInboundTransfersSucceedBody,
} from "@sideko-inc/stripe/types/test-helper-treasury-inbound-transfers-succeed-body";
import * as z from "zod";

/**
 * FailRequest
 */
export type FailRequest = {
  data?: TestHelperTreasuryInboundTransfersFailBody | undefined;
  id: string;
};

/**
 * @internal
 * FailRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FailRequest = {
  data?: External$TestHelperTreasuryInboundTransfersFailBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FailRequest
 */
const SchemaIn$FailRequest: z.ZodType<
  FailRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperTreasuryInboundTransfersFailBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FailRequest
 */
const SchemaOut$FailRequest: z.ZodType<
  External$FailRequest, // output type of this zod object
  z.ZodTypeDef,
  FailRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperTreasuryInboundTransfersFailBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$FailRequest = {
  in: SchemaIn$FailRequest,
  out: SchemaOut$FailRequest,
};

/**
 * ReturnedRequest
 */
export type ReturnedRequest = {
  data?: TestHelperTreasuryInboundTransfersReturnedBody | undefined;
  id: string;
};

/**
 * @internal
 * ReturnedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReturnedRequest = {
  data?: External$TestHelperTreasuryInboundTransfersReturnedBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReturnedRequest
 */
const SchemaIn$ReturnedRequest: z.ZodType<
  ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperTreasuryInboundTransfersReturnedBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReturnedRequest
 */
const SchemaOut$ReturnedRequest: z.ZodType<
  External$ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  ReturnedRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperTreasuryInboundTransfersReturnedBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$ReturnedRequest = {
  in: SchemaIn$ReturnedRequest,
  out: SchemaOut$ReturnedRequest,
};

/**
 * SucceedRequest
 */
export type SucceedRequest = {
  data?: TestHelperTreasuryInboundTransfersSucceedBody | undefined;
  id: string;
};

/**
 * @internal
 * SucceedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SucceedRequest = {
  data?: External$TestHelperTreasuryInboundTransfersSucceedBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SucceedRequest
 */
const SchemaIn$SucceedRequest: z.ZodType<
  SucceedRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperTreasuryInboundTransfersSucceedBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SucceedRequest
 */
const SchemaOut$SucceedRequest: z.ZodType<
  External$SucceedRequest, // output type of this zod object
  z.ZodTypeDef,
  SucceedRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperTreasuryInboundTransfersSucceedBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$SucceedRequest = {
  in: SchemaIn$SucceedRequest,
  out: SchemaOut$SucceedRequest,
};
