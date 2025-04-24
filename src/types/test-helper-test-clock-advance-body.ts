import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTestClockAdvanceBody
 */
export type TestHelperTestClockAdvanceBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The time to advance the test clock. Must be after the test clock's current frozen time. Cannot be more than two intervals in the future from the shortest subscription in this test clock. If there are no subscriptions in this test clock, it cannot be more than two years in the future.
   */
  frozenTime: number;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | number
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTestClockAdvanceBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTestClockAdvanceBody = {
  expand?: string[] | undefined;
  frozen_time: number;

  [additionalProperty: string]:
    | (string[] | undefined)
    | number
    | External$TestHelperTestClockAdvanceBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTestClockAdvanceBody
 */
const SchemaIn$TestHelperTestClockAdvanceBody: z.ZodType<
  TestHelperTestClockAdvanceBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    frozen_time: z.number().int(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      frozen_time: "frozenTime",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTestClockAdvanceBody
 */
const SchemaOut$TestHelperTestClockAdvanceBody: z.ZodType<
  External$TestHelperTestClockAdvanceBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTestClockAdvanceBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    frozenTime: z.number().int(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      frozenTime: "frozen_time",
    });
  });

export const Schemas$TestHelperTestClockAdvanceBody = {
  in: SchemaIn$TestHelperTestClockAdvanceBody,
  out: SchemaOut$TestHelperTestClockAdvanceBody,
};
